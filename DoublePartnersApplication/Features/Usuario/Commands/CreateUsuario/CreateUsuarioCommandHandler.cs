using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersDomain;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Usuario.Commands.CreateUsuario
{
    public class CreateUsuarioCommandHandler : IRequestHandler<CreateUsuarioCommand, bool>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger<CreateUsuarioCommandHandler> _logger;

        public CreateUsuarioCommandHandler(IUnitOfWork unitOfWork, IMapper mapper, ILogger<CreateUsuarioCommandHandler> logger)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _logger = logger;
        }
        public async Task<bool> Handle(CreateUsuarioCommand request, CancellationToken cancellationToken)
        {
            var VerifiData = await _unitOfWork.Repository<DoublePartnersDomain.Usuario>().GetFirstOrDefaultAsync(x => x.nombreUsuario == request.nombreUsuario);

            bool resp = false;
            if (VerifiData == null)
            {
                var Entity = _mapper.Map<DoublePartnersDomain.Usuario>(request);
                var EntityAdd = await _unitOfWork.Repository<DoublePartnersDomain.Usuario>().AddAsync(Entity);
                var childReportEntityResponse = _mapper.Map<DoublePartnersDomain.Usuario>(EntityAdd);

                _logger.LogInformation($"El registro fue creado con el id {EntityAdd.Id}");


                return resp = true;

            }
            else
            {
                _logger.LogInformation($"El registro {request.nombreUsuario} no fue creado");

                return resp = false;
            }
        }
    }
}
