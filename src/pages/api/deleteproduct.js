import { Mongo_Connect } from '@/dbConfig/dbConfig';
import DB_Schema from '@/model/Schema';

export default async function DELETE(req, res) {
    try {
        await Mongo_Connect();

        const { id } = req.body;
        const deletedProduct = await DB_Schema.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        console.log("Product deleted:", deletedProduct);

        return res.status(200).json({
            message: 'Product deleted successfully!',
            product: deletedProduct,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to delete product' });
    }
}
