using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersDomain.Common
{
    public abstract class Entity
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime createDate { get; set; }
        public string createUser { get; set; }
        public DateTime? modifyDate { get; set; }
        public string? modifyUser { get; set; }

    }
}
