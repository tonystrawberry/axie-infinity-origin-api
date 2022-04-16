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

driver.get('https://www.axie.tech/explorer/status-effects/')
sleep 5

categories = ["buffs", "debuffs", "neutral"]

card_container_class = ".css-6bzno3 > .css-j7qwjs"
card_art_class = "css-qtbu1z"
card_name_class = "css-19ubkqz"
card_description_class = "css-x94vr5"

effects_infos = []

categories.each do |category|
  category_element = driver.find_element(id: category)

  cards = category_element.find_elements(css: card_container_class)

  cards.each do |card|
    puts "card #{card.attribute("innerHTML")}"
    puts "FINDING ART...."
    art_element = card.find_element(class_name: card_art_class)
      puts "FOUND...."

    art_element = art_element.find_element(tag_name: 'img')
    art_src = art_element.attribute('src')
    card_id = art_src.split('/')[-1].split('.')[0]

    puts "art_src #{art_src}"
    open(art_src) do |image|
      File.open("images/effects/arts/#{card_id}.png", "wb") do |file|
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

    effects_infos << {
      id: card_id,
      name: name,
      description: description,
      category: category
    }

    puts "name #{name}"
  end
end

File.open("output/originEffects.json", "w") do |f|
  f.write(effects_infos.to_json)
end

# ドライバーを閉じる
driver.quit
