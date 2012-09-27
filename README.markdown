# Markdown Preview for Rails

Unobtrusively add markdown preview to textareas. This gem currently only works
in Rails >= 3.1.x with the asset pipeline enabled.

## Installation

Add the following line to your Gemfile

```
gem 'md_preview'
```

For Rails 3.1 and greater, the files will be added to the asset pipeline:

**app/assets/javascripts/application.js**

```
//= require md_preview
//= require jquery.elastic # Optional: Include if you want the textareas to fit content
```

Optionally include the default stylesheet:

**app/assets/stylesheets/application.css**

```
/*= require md_preview */
```

## Use

On any textarea, just set the `data-preview` attribute to `true`

```html
<textarea data-preview="true"></textarea>
```

## Contributing

Features and bugs are tracked through
[Github Issues](https://github.com/elm-city-craftworks/md_preview/issues).

Contributors retain copyright to their work but must agree to release their
contributions under the same terms as this project. For details, please see the
LICENSE file.

If you would like to help with developing MD Preview, please get in touch!
Contact Jordan through [GitHub (@jordanbyron)](https://github.com/jordanbyron)
or [Twitter (@jordan_byron)](http://twitter.com/jordan_byron)

### Submitting a Pull Request

1. If a ticket doesn't exist for your bug or feature, create one on GitHub.
    - **NOTE:** Don't be afraid to get feedback on your idea before you begin
      development work. In fact it is encouraged.
2. Fork the project.
3. Create a topic branch.
4. Implement your feature or bug fix.
5. Add documentation for your feature or bug fix.
6. Add tests for your feature or bug fix.
7. Run `rake test`. If your changes are not 100% covered, go back to step 6.
8. If your change affects something in this README, please update it
9. Commit and push your changes.
10. Submit a pull request.

## Authorship

Originally this code was written by [Chap Ambrose](http://www.chapambrose.com/)
for Mendicant University's
[University-Web](https://github.com/mendicant-original/university-web). Later it
was _gemified_ by [Jordan Byron](http://jordanbyron.com) so it could be easily
included in new rails projects.

## License

Copyright (c) 2011 Jordan Byron

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.