using AutoMapper;
using DoublePartnersApplication.Contracts.Persistence;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Tareas.Commands.CreateTarea
{
    public class CreateTareaCommandHandler : IRequestHandler<CreateTareaCommand, bool>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger<CreateTareaCommandHandler> _logger;

        public CreateTareaCommandHandler(IUnitOfWork unitOfWork, IMapper mapper, ILogger<CreateTareaCommandHandler> logger)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _logger = logger;
        }
        public async Task<bool> Handle(CreateTareaCommand request, CancellationToken cancellationToken)
        {
            if (request != null)
            {
                var Entity = _mapper.Map<DoublePartnersDomain.Tarea>(request);
                var EntityAdd = await _unitOfWork.Repository<DoublePartnersDomain.Tarea>().AddAsync(Entity);
                _logger.LogInformation($"El registro fue creado con el id {EntityAdd.Id}");

                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
