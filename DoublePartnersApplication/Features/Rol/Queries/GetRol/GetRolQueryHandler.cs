using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Features.Tareas.Queries.GetTarea;
using DoublePartnersApplication.Models;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Rol.Queries.GetRol
{
    public class GetRolQueryHandler : IRequestHandler<GetRolQuery, List<RolVm>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<GetRolQueryHandler> _logger;
        private readonly IMapper _mapper;

        public GetRolQueryHandler(IUnitOfWork unitOfWork, ILogger<GetRolQueryHandler> logger, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
        }
        public async Task<List<RolVm>> Handle(GetRolQuery request, CancellationToken cancellationToken)
        {
            if (request.Id != null)
            {
                var entity = await _unitOfWork.Repository<DoublePartnersDomain.Rol>().GetAsync(x => x.Id == request.Id);
                var entityVm = _mapper.Map<List<RolVm>>(entity);

                return entityVm;

            }
            else
            {
                var entity = await _unitOfWork.Repository<DoublePartnersDomain.Rol>().GetAllAsync();
                var entityVm = _mapper.Map<List<RolVm>>(entity);

                return entityVm;

            }
        }
    }
}
