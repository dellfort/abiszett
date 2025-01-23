import {html, render, RenderResult} from "@lit-labs/ssr"
import {collectResultSync} from "@lit-labs/ssr/lib/render-result.js"
import {TemplateResult} from "lit"

export async function renderHTML() {
  const template: TemplateResult = html`
    <!DOCTYPE html>
    <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="csp-nonce" name="csp-nonce" property="csp-nonce" content="__NONCE_VALUE__">
        
     
        <title>opening hours</title>
      </head>
      <body>
            Opening hours app
      </body>
    </html>
  `;

  const result: RenderResult = render(template);

  return collectResultSync(result);
}
