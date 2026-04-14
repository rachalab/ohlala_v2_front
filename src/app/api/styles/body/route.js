import { NextResponse } from "next/server";
import * as sass from "sass";
import path from "node:path";

export async function GET() {
    try {
        const scssPath = path.join(process.cwd(), "src", "styles", "body-content-drupal.scss");

        const result = sass.compile(scssPath, {
            loadPaths: [path.join(process.cwd(), "src", "styles")],
            style: "compressed",
        });

        return new NextResponse(result.css, {
            status: 200,
            headers: {
                "Content-Type": "text/css",
                "Cache-Control": "public, max-age=3600, s-maxage=86400",
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Error al compilar estilos", details: error.message },
            { status: 500 }
        );
    }
}
