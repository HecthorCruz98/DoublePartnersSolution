using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Features.Usuario.Queries.GetUsuario;
using DoublePartnersApplication.Models;
using DoublePartnersDomain;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Tareas.Queries.GetTarea
{
    public class GetTareaQueryHandler : IRequestHandler<GetTareaQuery, List<TareaVm>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<GetTareaQueryHandler> _logger;
        private readonly IMapper _mapper;

        public GetTareaQueryHandler(IUnitOfWork unitOfWork, ILogger<GetTareaQueryHandler> logger, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
        }
        public async Task<List<TareaVm>> Handle(GetTareaQuery request, CancellationToken cancellationToken)
        {
            if (request.Id != null)
            {
                var entity = await _unitOfWork.Repository<DoublePartnersDomain.Tarea>().GetAsync(x => x.Id == request.Id);
                var entityVm = _mapper.Map<List<TareaVm>>(entity);

                return entityVm;

            }
            else
            {
                var entity = await _unitOfWork.Repository<DoublePartnersDomain.Tarea>().GetAllAsync();
                var entityVm = _mapper.Map<List<TareaVm>>(entity);

                return entityVm;

            }
        }
    }
}
