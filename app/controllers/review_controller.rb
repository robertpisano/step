class ReviewController < ApplicationController
  def create
    result = JSON.parse(request.body.string)

    meeting = Meeting.find(result["meeting_id"])

    rev = Review.new(
      score: result["score"],
      notes: result["notes"]
    )

    ActiveRecord::Base.transaction do
      rev.save!
      meeting.review_id = rev.id #not ideal... probably shoul've put the meeting id in the review model
      meeting.save!
    end
  end

  def show
    review = Review.find(params[:review_id])

    render :json => review.as_json
  end
end
