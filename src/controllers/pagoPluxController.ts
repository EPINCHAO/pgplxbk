import { Request, Response } from "express";
import { getTransactionById } from "../services/pagoPluxService";

 const getTransactionByIdAcount = async (req: Request, res: Response): Promise<Response> => {
    const idTransaction = (req.query.idTransaction as string) || '';

    if (!idTransaction) {
        return res.status(400).json({ message: 'idTransaction is required' });
    }

    try {
        const transaction = await getTransactionById(idTransaction);
        return res.status(200).json(transaction);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving transaction', error });
    }
};

export { getTransactionByIdAcount};