hsh = { abc: 'hello', 'another_key' => 123, 4567 => 'third' }
# output -> ["abc", "4567", "another_key"]
hsh.keys.map(&:to_s).sort_by(&:length) #same likes hsh.keys.collect(&:to_s).sort_by { |key| key.length }