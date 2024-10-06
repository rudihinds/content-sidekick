import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    await kv.set('test', 'Hello, KV!');
    const value = await kv.get('test');
    return NextResponse.json({ success: true, value });
  } catch (error) {
    console.error('KV Test Error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

export const config = {
  runtime: 'edge',
};