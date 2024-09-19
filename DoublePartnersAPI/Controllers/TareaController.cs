using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Features.Tareas.Commands.CreateTarea;
using DoublePartnersApplication.Features.Tareas.Commands.DeleteTarea;
using DoublePartnersApplication.Features.Tareas.Commands.UpdateTarea;
using DoublePartnersApplication.Features.Tareas.Queries.GetTarea;
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
    public class TareaController : ControllerBase
    {
        IConfiguration _configuration;
        private readonly ILogger<TareaController> _logger;
        private readonly IMediator _mediator;
        private readonly IUnitOfWork _unitOfWork;
        /// <summary>
        /// Controlador tareas
        /// </summary>
        /// <param name="logger"></param>
        /// <param name="configuration"></param>
        /// <param name="mediator"></param>
        public TareaController(ILogger<TareaController> logger, IConfiguration configuration, IMediator mediator)
        {
            _mediator = mediator;
            _logger = logger;
            _configuration = configuration;
        }
        /// <summary>
        /// Listar Tareas
        /// </summary>
        /// <param name="Id"></param>
        /// <returns>TareaVm</returns>
        [HttpGet("GetTarea")]
        public async Task<ActionResult<IEnumerable<UsuarioVm>>> GetTarea(int? Id)
        {
            var query = await _mediator.Send(new GetTareaQuery(Id));
            return Ok(query);
        }
        /// <summary>
        /// Crear Usuario
        /// </summary>
        /// <param name="command"></param>
        /// <returns>true/false</returns>
        [HttpPost("CreateTarea")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<ActionResult<bool>> CreateTarea([FromBody] CreateTareaCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
        /// <summary>
        /// Actualizar Usuarios
        /// </summary>
        /// <param name="command"></param>
        /// <returns>true/false</returns>
        [HttpPut("UpdateTarea")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<ActionResult<bool>> UpdateTarea([FromBody] UpdateTareaCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
        /// <summary>
        /// Eliminar Usuarios
        /// </summary>
        /// <param name="command"></param>
        /// <returns>true/false</returns>
        [HttpPost("DeleteTarea")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<ActionResult<int>> DeleteTarea([FromBody] DeleteTareaCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}
