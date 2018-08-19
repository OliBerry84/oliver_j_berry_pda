require ("minitest/autorun")
require_relative('testing_task_2.rb')
require_relative('card.rb')

class CardGameTest < MiniTest::Test
  def setup
    @card = Card.new("Ace", 1)
    @card1 = Card.new("King", 10)
    @card2 = Card.new("Eight", 8)
  end


def test_checkForAce
  result = @card.checkforAce(@card)
  assert_equal(true, result)
end

def test_highest_card
result = @card.highest_card(@card, @card2)
assert_equal("Eight", result)
end

def test_cards_total
  result = "You have a total of #{@card1.value + @card2.value + @card.value}"
  assert_equal( "You have a total of 19", result)
end

end
