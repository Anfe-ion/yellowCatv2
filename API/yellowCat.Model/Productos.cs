using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace yellowCat.Model
{
    public class Productos
    {
        public int CategoriaID { get; set; }
        public string Descripcion { get; set; }
        public string ImgURL { get; set; }
        public string Nombre  { get; set; }
        public decimal Precio { get; set; }
        public int ProductoID { get; set; }
        public int Stock { get; set; }

    }
}
