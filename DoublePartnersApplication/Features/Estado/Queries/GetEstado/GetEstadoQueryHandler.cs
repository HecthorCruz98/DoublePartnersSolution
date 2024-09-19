using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Features.Rol.Queries.GetRol;
using DoublePartnersApplication.Models;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Estado.Queries.GetEstado
{
    public class GetEstadoQueryHandler : IRequestHandler<GetEstadoQuery, List<EstadoVm>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<GetEstadoQueryHandler> _logger;
        private readonly IMapper _mapper;

        public GetEstadoQueryHandler(IUnitOfWork unitOfWork, ILogger<GetEstadoQueryHandler> logger, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
        }
        public async Task<List<EstadoVm>> Handle(GetEstadoQuery request, CancellationToken cancellationToken)
        {
            if (request.Id != null)
            {
                var entity = await _unitOfWork.Repository<DoublePartnersDomain.Estado>().GetAsync(x => x.Id == request.Id);
                var entityVm = _mapper.Map<List<EstadoVm>>(entity);

                return entityVm;

            }
            else
            {
                var entity = await _unitOfWork.Repository<DoublePartnersDomain.Estado>().GetAllAsync();
                var entityVm = _mapper.Map<List<EstadoVm>>(entity);

                return entityVm;

            }
        }
    }
}
