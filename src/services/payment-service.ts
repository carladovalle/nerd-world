import paymentRepository from "../repositories/payment-repository";
import enrollmentRepository from "../repositories/enrollment-repository";
import cartRepository from "../repositories/cart-repository";

import { unauthorizedError } from "../errors/unauthorized-error";

export async function processPayment(userId: number, params: paymentParams) {

  const enrollment = await enrollmentRepository.findByUserId(userId);
  const cart = await cartRepository.findByUserId(userId);
  
  if( !enrollment || !cart ) throw unauthorizedError();

  const paymentData = {
    enrollmentId: enrollment.id,
    cartId: cart.id,
    value: params.value,
    cardIssuer: params.issuer,
    cardLastdigits: params.number.toString().slice(-4),
  };

  return await paymentRepository.processPayment(paymentData);
}

type paymentParams = {
  value: number,
  issuer: string;
  number: number;
  name: string;
  expirationDate: Date;
  cvv: number;
};

const paymentService = {
  processPayment
};

export default paymentService;