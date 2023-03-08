# @ngx-tc/card

A card component is a versatile UI element that can effectively showcase a variety of content related to a single subject. It is typically used to display bite-sized pieces of information, such as product features, news articles, or user profiles, in a visually appealing and easily digestible format. A card can contain a mix of text, images, icons, and other multimedia elements, arranged in a hierarchy that draws the viewer's attention to the most important information first. The size and layout of a card can be customized to fit different screen sizes and resolutions, making it an ideal choice for responsive web design.

## How to use

1. Install `@ngx-tc/card`:
  
  ```bash
  npm i @ngx-tc/card
  ```

2. Import the module `TcCardModule` and add it to the module that declares your component:

  ```ts
  import { TcCardModule } from '@ngx-tc/card';
  
  @NgModule({
    declarations: [MyComponent],
    imports: [TcCardModule],
  })
  export class MyModule {}
  ```

3. Use the card in your component's template:

  ```html
  <tc-card [title]="'Card title'">
    Card content
  </tc-card>
  ```

4. Change styles to fit your project's specific needs with built-in customization css variables:

  ```scss
  :root {
    .tc-card {
      --tc-card-fs: 'custom style';
      --tc-card-ff: 'custom style';
      --tc-card-fw: 'custom style';
      --tc-card-module-rem: 'custom style';
      --tc-card-lh: 'custom style';
      --tc-card-shape: 'custom style';
      --tc-card-shadow: 'custom style';
      --tc-card-margin: 'custom style';
      --tc-card-title-fs: 'custom style';
      --tc-card-title-fw: 'custom style';
      --tc-card-header-bg: 'custom style';
      --tc-card-header-padding: 'custom style';
      --tc-card-content-padding: 'custom style';
    }
  }
  ```
