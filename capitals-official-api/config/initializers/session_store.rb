if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_capitals-official', domain: 'front-end-domain'
else
  Rails.application.config.session_store :cookie_store, key: '_capitals-official'
end
