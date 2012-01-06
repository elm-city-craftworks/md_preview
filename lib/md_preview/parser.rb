module MdPreview
  module Parser
    extend self

    def parse(content)
      return if content.blank?

      markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML,
        :autolink            => true,
        :space_after_headers => true,
        :no_intra_emphasis   => true,
        :fenced_code_blocks  => true)

      markdown.render(content).html_safe
    end
  end
end