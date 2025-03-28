import {NextResponse} from "next/server";
import {encode} from "../../../../lib/encoder";

export const runtime = "edge";
export async function POST(request: Request) {
  try {
    const reqjson = await request.json();
    const text = reqjson.text;
    const game = reqjson.game;

    if (!text) {
      return NextResponse.json(
        {error: "The body text is required."},
        {status: 400}
      );
    }

    if (!game) {
      return NextResponse.json(
        {error: "The body game is required."},
        {status: 400}
      );
    }

    const encodedText = encode(text, game);

    return new NextResponse(encodedText, {
      status: 200,
      headers: {"Content-Type": "text/plain"},
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {error: "An unexpected error occurred."},
      {status: 500}
    );
  }
}
