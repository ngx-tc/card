## About

@ngx-tc/card is an Angular library that provides developers with the ability to easily create customizable cards in their applications. The library is designed to be easy to use and allows developers to create responsive and adaptive cards that fit their specific needs.

The library includes a number of pre-built card templates, which can be easily customized to fit the specific requirements of your application. These templates include standard card types such as basic card, media card, and advanced card.

The library is built using Angular. It is designed to be lightweight and easy to use, with minimal setup required to get started. Overall, @ngx-tc/card is a powerful and flexible library that provides developers with the tools they need to create effective and customizable cards for their Angular applications.

## Usage

Install `@ngx-tc/card` in your project:

```
npm install @ngx-tc/card
```

Import `TcCardModule` e.g. in your `app.module.ts`:
```typescript
import { TcCardModule } from '@ngx-tc/card';

@NgModule({
  imports: [
    ...
    TcCardModule
  ],
})
export class AppModule {}
```

Use the `tc-card` component in you app:
```html
<tc-card [title]="'Card title'">
  Card content
</tc-card>
```

## Demo
To view a working demo of the library in action, please follow the provided link. The demo will allow you to explore the various components and features included in this library and see how they can be used in your Angular applications.
[http://tc-library.type-code.pro/#/components/cards](http://tc-library.type-code.pro/#/components/cards)
