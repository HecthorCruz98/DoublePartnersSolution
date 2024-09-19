using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Usuario.Commands.UpdateUsuario
{
    public class UpdateUsuarioCommandHandler : IRequestHandler<UpdateUsuarioCommand, bool>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger<UpdateUsuarioCommandHandler> _logger;

        public UpdateUsuarioCommandHandler(IUnitOfWork unitOfWork, IMapper mapper, ILogger<UpdateUsuarioCommandHandler> logger)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _logger = logger;
        }
        public async Task<bool> Handle(UpdateUsuarioCommand request, CancellationToken cancellationToken)
        {
            var VerifiData = await _unitOfWork.Repository<DoublePartnersDomain.Usuario>().GetFirstOrDefaultAsync(x => x.Id == request.Id);

            bool resp = false;
            if (VerifiData != null)
            {
                VerifiData.nombreUsuario = request.nombreUsuario;
                VerifiData.apellidousuario = request.apellidousuario;
                VerifiData.idRol = request.idRol;
                VerifiData.loginUsuario = request.loginUsuario;
                VerifiData.contrasenaUsuario = request.contrasenaUsuario;
                VerifiData.modifyDate = DateTime.Now;
                VerifiData.modifyUser = request.modifyUser;

                var EntityGetResponse = await _unitOfWork.Repository<DoublePartnersDomain.Usuario>().UpdateAsync(VerifiData);

                _logger.LogInformation($"El registro {request.Id} fue actualizado");


                return resp = true;

            }
            else
            {
                _logger.LogInformation($"El registro {request.Id} no fue actualizado");

                return resp = false;
            }
        }
    }
}
