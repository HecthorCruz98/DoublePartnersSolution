using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Features.Login.Commands.CreateLogin;
using DoublePartnersApplication.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;

namespace DoublePartnersAPI.Controllers
{
    [ApiController]
    [Route("/api/v1/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILogger<LoginController> _logger;
        private readonly IMediator _mediator;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IConfiguration _configuration;
        public LoginController(ILogger<LoginController> logger, IConfiguration configuration, IMediator mediator)
        {
            _mediator = mediator;
            _logger = logger;
            _configuration = configuration;
        }
        [HttpPost("LoginUsuario")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<ActionResult<UsuarioVm>> CreateUsuario([FromBody] CreateLoginCommand command)
        {
            var user = await _mediator.Send(command);
            if (user != null)
            {
                var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Sid, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.loginUsuario),
                new Claim(ClaimTypes.GivenName, $"{user.nombreUsuario} {user.apellidousuario}")
            };

                //        foreach (var role in roles)
                //        {
                //            claims.Add(new Claim(ClaimTypes.Role, role));
                //        }

                var _con = _configuration["Jwt:Key"].ToString();
                var asd = _con.ToString();
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);
                var tokenDescriptor = new JwtSecurityToken(
                    issuer: _configuration["Jwt:Issuer"],
                    audience: _configuration["Jwt:Audience"],
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(720),
                    signingCredentials: credentials);

                var jwt = new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
                user.token = jwt;
            }
            return Ok(user);
        }
    }
}
