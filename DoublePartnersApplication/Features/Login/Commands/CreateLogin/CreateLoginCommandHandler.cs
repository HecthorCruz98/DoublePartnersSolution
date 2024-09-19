using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Models;
using DoublePartnersDomain;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Login.Commands.CreateLogin
{
    public class CreateLoginCommandHandler : IRequestHandler<CreateLoginCommand, UsuarioVm>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger<CreateLoginCommandHandler> _logger;
        public CreateLoginCommandHandler(IUnitOfWork unitOfWork, IMapper mapper, ILogger<CreateLoginCommandHandler> logger)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _logger = logger;
        }
        public async Task<UsuarioVm> Handle(CreateLoginCommand request, CancellationToken cancellationToken)
        {
            var VerifiData = await _unitOfWork.Repository<DoublePartnersDomain.Usuario>().GetFirstOrDefaultAsync(x => x.loginUsuario == request.UsuarioLogin && x.contrasenaUsuario == request.Contrasena);

            if (VerifiData != null)
            {
                var Entity = _mapper.Map<UsuarioVm>(VerifiData);

                _logger.LogInformation($"{Entity.loginUsuario} fue logueado");

                return Entity;

            }
            else
            {
                _logger.LogInformation($"{request.UsuarioLogin} no fue logueado");

                return null;
            }
        }
    }
}
