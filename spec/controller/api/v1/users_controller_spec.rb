require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe 'GET index' do
    it 'render users successfully' do
      get :index
      expect(response).to have_http_status(:success)
    end
  end
end
