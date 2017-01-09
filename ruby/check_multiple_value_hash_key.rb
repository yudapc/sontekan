par = {session: {email: 'haha@hihi.com', password: '123456', remember: nil}}
# check nil? value
puts par[:session].values_at(:email, :password, :remember).all?(&:nil?)
