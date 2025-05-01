import express from "express"
import hotelRoutes from "./routes/hotelRoutes.js"
import serviceRoutes from "./routes/serviceRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/hotels', hotelRoutes)
app.use('/services', serviceRoutes)
app.use('/orders', orderRoutes)
app.use('/users', userRoutes)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
