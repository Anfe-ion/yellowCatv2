using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using yellowCat.Data.Respositories;
using yellowCat.Model;

namespace yellowCat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly IProductosRepository _productosRepository;

        public ProductosController(IProductosRepository productosRepository) { 
            _productosRepository = productosRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetProductos()
        {
            return Ok(await _productosRepository.GetProductos());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductosDetails(int id)
        {
            return Ok(await _productosRepository.GetProductosDetails(id));
        }

        [HttpPost]

        public async Task<IActionResult> InsertProducto([FromBody] Productos productos)
        {
            if(productos == null || !ModelState.IsValid)
            {
                return BadRequest();
            }

            var created = await _productosRepository.InsertProducto(productos);

            return Created("Creado ", created);
        }

        [HttpPut]

        public async Task<IActionResult> UpdateProducto([FromBody] Productos productos)
        {
            if (productos == null || !ModelState.IsValid)
            {
                return BadRequest();
            }

            await _productosRepository.UpdateProducto(productos);

            return NoContent();
        }

        [HttpDelete]

        public async Task<IActionResult> DeleteProducto(int id)
        {
            await _productosRepository.DeleteProducto(new Productos { ProductoID = id });

            return NoContent();
        }
    }
}
