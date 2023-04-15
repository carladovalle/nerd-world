import { prisma } from "../config/database";
import { Prisma, PaymentStatus } from "@prisma/client";

async function processPayment(data: Prisma.PaymentsUncheckedCreateInput) {
  const payment = await prisma.$transaction([
    prisma.payments.create({ data }),

    prisma.carts.update({
      where: {
        id: data.cartId,
      },
      data: {
        status: PaymentStatus.PAID,
      }
    })
  ]);
  return payment;
}

const paymentRepository = {
  processPayment
};

export default paymentRepository;