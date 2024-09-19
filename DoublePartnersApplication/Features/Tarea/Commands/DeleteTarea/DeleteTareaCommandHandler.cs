using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using DoublePartnersApplication.Features.Usuario.Commands.DeleteUsuario;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Tareas.Commands.DeleteTarea
{
    public class DeleteTareaCommandHandler : IRequestHandler<DeleteTareaCommand, bool>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<DeleteTareaCommandHandler> _logger;
        private readonly IMapper _mapper;


        public DeleteTareaCommandHandler(IUnitOfWork unitOfWork, ILogger<DeleteTareaCommandHandler> logger, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
        }
        public async Task<bool> Handle(DeleteTareaCommand request, CancellationToken cancellationToken)
        {
            if (!request.Id.Equals(null))
            {
                var Delete = await _unitOfWork.Repository<DoublePartnersDomain.Tarea>().GetFirstOrDefaultAsync(x => x.Id == request.Id);

                if (Delete != null)
                {
                    await _unitOfWork.Repository<DoublePartnersDomain.Tarea>().DeleteAsync(Delete);

                    return true;
                }
                else
                {
                    return false;

                }

            }
            else
            {
                return false;

            }
        }
    }
}
