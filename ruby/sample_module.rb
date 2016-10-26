module UserService
  def full_name(first_name, last_name)
    "#{first_name} #{last_name}"
  end

  def is_admin?(user)
    user.is_admin?
  end
end

class User
  include UserService
end

puts User.new.full_name("ahmad", "dahlan")
