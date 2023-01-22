import express from 'express';
import carRoutes from './Routes/car.routes';
import motorcycleRoutes from './Routes/motorcycle.routes';

const app = express();

app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);

export default app;
