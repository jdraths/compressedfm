// pages/api/revalidate.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'src/utils/prisma';

/**
 * this path will revalidate staticProps per: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation
 * - expects `exactPath` as a `string` or `string[]` for paths to revalidate
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request

  try {
    const { email } = req.body;

    await prisma.newsletterSignup.create({
      data: { email },
    });
    return res.json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log('Error', err.message);
    let { message } = err;
    if (err.code === 'P2002') message = 'Email already saved';
    console.log('returning');
    return res.status(400).json({ error: 'Error', message: message || 'something went wrong' });
  }
}
