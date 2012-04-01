$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "md_preview/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "md_preview"
  s.version     = MdPreview::VERSION
  s.authors     = ["Jordan Byron"]
  s.email       = ["jordan@ducksoupsoftware.com"]
  s.homepage    = "https://github.com/mendicant-university/md_preview"
  s.summary     = "Markdown preview for Rails"
  s.description = "Rails plugin to unobtrusively add markdown preview to textareas"

  s.files = Dir["{app,config,db,lib,vendor}/**/*"] +
    %w{Rakefile README.markdown LICENSE}
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails",     ">= 3.0.0"
  s.add_dependency "redcarpet", ">= 2.0.0"
end
