import { Mongo_Connect } from '@/dbConfig/dbConfig';
import DB_Schema from '@/model/Schema';

export default async function PATCH(req, res) {
    try {
        await Mongo_Connect();

        const { id, name, quantity, price } = req.body; 
        if (!id) return res.status(400).json({ error: 'ID is required' });

        const updatedProduct = await DB_Schema.findByIdAndUpdate(
            id,
            { name, quantity, price },
            { new: true } 
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        return res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to update product' });
    }
}
