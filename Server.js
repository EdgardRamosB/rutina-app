// USAMOS PARA COMPRAR (PROBAR) LA CUENTA FAKE DE COMPRA
import express from "express"; /*instalar*/
import cors from "cors";/*instalar*/

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  // PROBANDO CREDENCIALES DE VENDEDOR (CUENTA FAKE)
  accessToken: "APP_USR-3497655455782000-101615-683d0a56148bbf161ea3ac1bc7f82aa3-2913432341",
});

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Soy el server respetame:)");
});

app.post("/create_preference", async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "PEN",
        },
      ],
      back_urls: {
        success: "https://www.youtube.com/@onthecode",
        failure: "https://www.youtube.com/@onthecode",
        pending: "https://www.youtube.com/@onthecode",
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({
      id: result.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al crear la preferencia :(",
    });
  }
});

app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
