require 'test_helper'

module MdPreview
  module CustomParser
    extend self

    def parse(text)
      "WAHOOOO"
    end
  end
end

class MdPreviewTest < ActiveSupport::TestCase
  test "parses text using a custom parser if present" do
    text = "Hello World!"

    assert_equal "WAHOOOO", MdPreview::Parser.parse(text)
  end
end
