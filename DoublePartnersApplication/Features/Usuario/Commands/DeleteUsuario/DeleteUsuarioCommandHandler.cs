using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Usuario.Commands.DeleteUsuario
{
    public class DeleteUsuarioCommandHandler : IRequestHandler<DeleteUsuarioCommand, bool>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<DeleteUsuarioCommandHandler> _logger;
        private readonly IMapper _mapper;


        public DeleteUsuarioCommandHandler(IUnitOfWork unitOfWork, ILogger<DeleteUsuarioCommandHandler> logger, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
        }
        public async Task<bool> Handle(DeleteUsuarioCommand request, CancellationToken cancellationToken)
        {
            if (!request.Id.Equals(null))
            {
                var Delete = await _unitOfWork.Repository<DoublePartnersDomain.Usuario>().GetFirstOrDefaultAsync(x => x.Id == request.Id);

                if (Delete != null)
                {
                    await _unitOfWork.Repository<DoublePartnersDomain.Usuario>().DeleteAsync(Delete);

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
