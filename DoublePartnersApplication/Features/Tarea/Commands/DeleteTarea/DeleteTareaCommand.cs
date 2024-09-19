using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Tareas.Commands.DeleteTarea
{
    public class DeleteTareaCommand : IRequest<bool>
    {
        public DeleteTareaCommand(int id)
        {
            Id = id;
        }
        public int Id { get; set; }
    }
}
