using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Features.Usuario.Commands.CreateUsuario;
using DoublePartnersApplication.Features.Usuario.Commands.DeleteUsuario;
using DoublePartnersApplication.Features.Usuario.Commands.UpdateUsuario;
using DoublePartnersApplication.Features.Usuario.Queries.GetUsuario;
using DoublePartnersApplication.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace DoublePartnersAPI.Controllers
{
    [ApiController]
    [Route("/api/v1/[controller]")]
    public class UsuarioController : ControllerBase
    {
        IConfiguration _configuration;
        private readonly ILogger<UsuarioController> _logger;
        private readonly IMediator _mediator;
        private readonly IUnitOfWork _unitOfWork;
        /// <summary>
        /// Controlador usuarios
        /// </summary>
        /// <param name="logger"></param>
        /// <param name="configuration"></param>
        /// <param name="mediator"></param>
        public UsuarioController(ILogger<UsuarioController> logger, IConfiguration configuration, IMediator mediator)
        {
            _mediator = mediator;
            _logger = logger;
            _configuration = configuration;
        }
        /// <summary>
        /// Listar Usuarios
        /// </summary>
        /// <param name="Id"></param>
        /// <returns>UsuarioVm</returns>
        [HttpGet("GetUsuario")]
        public async Task<ActionResult<IEnumerable<UsuarioVm>>> GetUsuario(int? Id)
        {
            var query = await _mediator.Send(new GetUsuarioQuery(Id));
            return Ok(query);
        }
        /// <summary>
        /// Crear Usuario
        /// </summary>
        /// <param name="command"></param>
        /// <returns>true/false</returns>
        [HttpPost("CreateUsuario")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<ActionResult<bool>> CreateUsuario([FromBody] CreateUsuarioCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
        /// <summary>
        /// Actualizar Usuarios
        /// </summary>
        /// <param name="command"></param>
        /// <returns>true/false</returns>
        [HttpPut("UpdateUsuario")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<ActionResult<bool>> UpdateCustomer([FromBody] UpdateUsuarioCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
        /// <summary>
        /// Eliminar Usuarios
        /// </summary>
        /// <param name="command"></param>
        /// <returns>true/false</returns>
        [HttpPost("DeleteUsuario")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<ActionResult<int>> DeleteCustomer([FromBody] DeleteUsuarioCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}
