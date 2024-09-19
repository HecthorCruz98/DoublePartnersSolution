using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Features.Rol.Queries.GetRol;
using DoublePartnersApplication.Features.Tareas.Queries.GetTarea;
using DoublePartnersApplication.Features.Usuario.Queries.GetUsuario;
using DoublePartnersApplication.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace DoublePartnersAPI.Controllers
{
    [ApiController]
    [Route("/api/v1/[controller]")]
    public class RolController : ControllerBase
    {
        IConfiguration _configuration;
        private readonly ILogger<RolController> _logger;
        private readonly IMediator _mediator;
        private readonly IUnitOfWork _unitOfWork;
        /// <summary>
        /// Controlador roles
        /// </summary>
        /// <param name="logger"></param>
        /// <param name="configuration"></param>
        /// <param name="mediator"></param>
        public RolController(ILogger<RolController> logger, IConfiguration configuration, IMediator mediator)
        {
            _mediator = mediator;
            _logger = logger;
            _configuration = configuration;
        }
        /// <summary>
        /// Listar roles
        /// </summary>
        /// <param name="Id"></param>
        /// <returns>RolVm</returns>
        [HttpGet("GetRol")]
        public async Task<ActionResult<IEnumerable<RolVm>>> GetRol(int? Id)
        {
            var query = await _mediator.Send(new GetRolQuery(Id));
            return Ok(query);
        }
    }
}
