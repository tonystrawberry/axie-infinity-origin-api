require 'selenium-webdriver'
require "csv"
require 'active_support'
require 'active_support/core_ext'
require "open-uri"
require "fileutils"

@wait_time = 3
@timeout = 4

Selenium::WebDriver.logger.output = File.join("./", "selenium.log")
Selenium::WebDriver.logger.level = :warn
driver = Selenium::WebDriver.for :chrome
driver.manage.timeouts.implicit_wait = @timeout
wait = Selenium::WebDriver::Wait.new(timeout: @wait_time)

driver.get('https://www.axie.tech/explorer/runes/')
sleep 5

card_container_class = "css-pc34r7"
card_background_class = "css-ne5mje"
card_art_class = "css-bog1ba"
card_name_class = "css-1g81df6"
card_description_class = "css-1gszwix"

cards = driver.find_elements(class_name: card_container_class)

runes_infos = []

cards.each do |card|
  background_element = card.find_element(class_name: card_background_class)
  background_element = background_element.find_element(tag_name: 'img')
  background_src = background_element.attribute('src')
  class_name = background_element.attribute('src').split('/')[-1].split('.')[0]

  puts "background_src #{background_src}"
  open(background_src) do |image|
    File.open("images/runes/class/#{class_name}.jpg", "wb") do |file|
      file.write(image.read)
    end
  end

  art_element = card.find_element(class_name: card_art_class)
  art_element = art_element.find_element(tag_name: 'img')
  art_src = art_element.attribute('src')
  rune_id = art_src.split('/')[-1].split('.')[0]

  puts "art_src #{art_src}"
  open(art_src) do |image|
    File.open("images/runes/arts/#{rune_id}.jpg", "wb") do |file|
      file.write(image.read)
    end
  end

  name_element = card.find_element(class_name: card_name_class)
  name = name_element.text

  description = nil
  begin
    description_element = card.find_element(class_name: card_description_class)
    description = description_element.text
  rescue
    
  end

  runes_infos << {
    id: rune_id,
    class: class_name,
    name: name,
    description: description,
  }

  puts "name #{name}"
end

File.open("output/originRunes.json", "w") do |f|
  f.write(runes_infos.to_json)
end

# ドライバーを閉じる
driver.quit
