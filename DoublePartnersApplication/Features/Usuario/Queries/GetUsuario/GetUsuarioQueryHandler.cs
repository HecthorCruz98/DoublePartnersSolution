using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Models;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace DoublePartnersApplication.Features.Usuario.Queries.GetUsuario
{
    public class GetUsuarioQueryHandler : IRequestHandler<GetUsuarioQuery, List<UsuarioVm>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<GetUsuarioQueryHandler> _logger;
        private readonly IMapper _mapper;

        public GetUsuarioQueryHandler(IUnitOfWork unitOfWork, ILogger<GetUsuarioQueryHandler> logger, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
        }
        public async Task<List<UsuarioVm>> Handle(GetUsuarioQuery request, CancellationToken cancellationToken)
        {
            if (request.Id != null)
            {
                var entity = await _unitOfWork.Repository<DoublePartnersDomain.Usuario>().GetAsync(x => x.Id == request.Id);
                var entityVm = _mapper.Map<List<UsuarioVm>>(entity);

                return entityVm;

            }
            else
            {
                var entity = await _unitOfWork.Repository<DoublePartnersDomain.Usuario>().GetAllAsync();
                var entityVm = _mapper.Map<List<UsuarioVm>>(entity);

                return entityVm;

            }
        }
    }
}
