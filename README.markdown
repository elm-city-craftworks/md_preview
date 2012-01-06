# Markdown Preview for Rails

Unobtrusively add markdown preview to textareas

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

Features and bugs are tracked through [Github Issues](https://github.com/mendicant-university/md_preview/issues).

Contributors retain copyright to their work but must agree to release their
contributions under the same terms as this project. For details, please see the LICENSE file.

If you would like to help with developing MD Preview, please get in touch!
Contact Jordan through [GitHub (@jordanbyron)](https://github.com/jordanbyron) or [Twitter (@jordan_byron)](http://twitter.com/jordan_byron)

### Submitting a Pull Request

1. If a ticket doesn't exist for your bug or feature, create one on GitHub.
    - **NOTE:** Don't be afraid to get feedback on your idea before you begin development work. In fact it is encouraged.
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

Originally this code was written by [Chap Ambrose](http://www.chapambrose.com/) for Mendicant University's [University-Web](https://github.com/mendicant-university/university-web). Later it was made into a plugin by [Jordan Byron](http://jordanbyron.com) so it could be easily included in new rails projects.

## License

MD Preview is released under the License of Ruby. For details, please see the LICENSE file.

If you wish to contribute to MD Preview, you will retain your own copyright but must agree to license your code under the same terms as the project itself.

---

MD Preview - a [Mendicant University](http://mendicantuniversity.org) project