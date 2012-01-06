class MarkdownController < ApplicationController

  def parse
    render :text => MdPreview::Parser.parse(params[:text])
  end

end
