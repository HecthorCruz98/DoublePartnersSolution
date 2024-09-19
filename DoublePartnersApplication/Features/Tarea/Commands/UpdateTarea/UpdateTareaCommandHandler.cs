using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using MediatR;
using Microsoft.Extensions.Logging;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Tareas.Commands.UpdateTarea
{
    public class UpdateTareaCommandHandler : IRequestHandler<UpdateTareaCommand, bool>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger<UpdateTareaCommandHandler> _logger;

        public UpdateTareaCommandHandler(IUnitOfWork unitOfWork, IMapper mapper, ILogger<UpdateTareaCommandHandler> logger)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _logger = logger;
        }
        public async Task<bool> Handle(UpdateTareaCommand request, CancellationToken cancellationToken)
        {
            var verifyData = await _unitOfWork.Repository<DoublePartnersDomain.Tarea>().GetFirstOrDefaultAsync(x => x.Id == request.Id);

            int resp = 0;

            if (verifyData != null)
            {
                verifyData.descripcionTarea = request.descripcionTarea;
                verifyData.idEstado = request.idEstado;
                verifyData.idUsuario = request.idUsuario;
                verifyData.modifyUser = request.modifyUser;
                verifyData.modifyDate = DateTime.Now;

                await _unitOfWork.Repository<DoublePartnersDomain.Tarea>().UpdateAsync(verifyData);

                _logger.LogInformation($"El registro con el id {verifyData.Id} fue actualizado correctamente ");


                return true;

            }
            else
            {
                return false;
            }
        }
    }
}
