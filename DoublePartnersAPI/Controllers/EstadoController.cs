using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Features.Estado.Queries.GetEstado;
using DoublePartnersApplication.Features.Rol.Queries.GetRol;
using DoublePartnersApplication.Models;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DoublePartnersAPI.Controllers
{
    [ApiController]
    [Route("/api/v1/[controller]")]
    public class EstadoController : ControllerBase
    {
        IConfiguration _configuration;
        private readonly ILogger<EstadoController> _logger;
        private readonly IMediator _mediator;
        private readonly IUnitOfWork _unitOfWork;
        /// <summary>
        /// Controlador estado
        /// </summary>
        /// <param name="logger"></param>
        /// <param name="configuration"></param>
        /// <param name="mediator"></param>
        public EstadoController(ILogger<EstadoController> logger, IConfiguration configuration, IMediator mediator)
        {
            _mediator = mediator;
            _logger = logger;
            _configuration = configuration;
        }
        /// <summary>
        /// Listar estados
        /// </summary>
        /// <param name="Id"></param>
        /// <returns>EstadoVm</returns>
        [HttpGet("GetEstado")]
        public async Task<ActionResult<IEnumerable<EstadoVm>>> GetEstado(int? Id)
        {
            var query = await _mediator.Send(new GetEstadoQuery(Id));
            return Ok(query);
        }
    }
}
