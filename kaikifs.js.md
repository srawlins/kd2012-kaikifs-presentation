title: KaikiFS
author: Sam Rawlins
scripts: jquery-1.8.2.min.js,bindings.js


%%%%%
%% Add some inline style rules...

%css

a {
  color: inherit;
  text-decoration: none;
}

body {
  background-image: -webkit-linear-gradient(top left, silver, white);
  background-image:    -moz-linear-gradient(top left, silver, white);
  background-image:     -ms-linear-gradient(top left, silver, white);
  background-image:      -o-linear-gradient(top left, silver, white);
  background-image:         linear-gradient(top left, silver, white);
}

.step {
  width: 700px;
  height: 400px;
  padding: 40px 60px;

  font-size: 48px;
  text-align: center;

  opacity: 0.3;
}

.step.active {
  opacity: 1;
}

.slide {
  background: white;
}

code {
  background-color: yellow;
  font-size: 14px;
}

%end


%%%%%%%%%%%%%%%%%%%
%% Here we go...


!SLIDE slide x=-1000 y=-1500

## KaikiFS

Stakeholder-Friendly Acceptance Tests using Cucumber and Selenium

!SLIDE slide x=0 y=-1500

### What is KaikiFS?

KaikiFS is a Ruby project, built on several technologies, primarily **Cucumber**, **RSpec**, and **Selenium 2**.

!SLIDE slide x=1000 y=-1500

This means that Cucumber **scenarios** are **driving a browser** through Selenium, and using RSpec to define the expected **behavior**.

!SLIDE x=0 y=0 scale=4

<h2 class="one-line">Show Me</h2>

!SLIDE x=2700 y=-1500 scale=3

## What is <span class='cuke'>Cucumber</span>?

!SLIDE slide x=4000 y=-1500

<span class='cuke'>Cucumber</span> is a tool for:

* Specifying Behavior
* Writing Acceptance Tests
* Humans

!SLIDE screen x=5000 y=-1500

### small example

<pre><code><strong class='teal'>Feature:</strong> KFSI-5638

  <strong class='teal'>Background:</strong>
    <span class='yellow'>Given</span> <strong>I am up top</strong>

  <span class='green'>@jira</span>
  <strong class='teal'>Scenario:</strong> <strong>Searching under Asset Retirement Global doesn't blow up.</strong>

    <span class='yellow'>Given</span> <strong>I am logged in</strong>
    <span class='yellow'>And</span> <strong>I am on the "Central Admin" tab</strong>
    <strong class='yellow'>When</strong> <strong>I click the "Asset Retirement Global" portal link</strong>
    <strong class='yellow'>And</strong> <strong>I click "search"</strong>
    <span class='gray'>Then</span> <strong>I shouldn't see an incident report</strong>
    <span class='gray'>And</span> <strong>I shouldn't get an HTTP Status 500</strong>
</code></pre>

!SLIDE x=6000 y=-1500

<h3 class="one-line">Executable Specs</h3>

<div class="left-no-margin">
  <p class="gherkin-1">
    <span class='yellow'>Given</span> <strong>I am up top</strong>
  </p>
  <pre class="ruby-1"><code>Given <span class='blue'>/^I am up top$/</span> <span class='brown'>do</span>
  kaikifs.switch_to.default_content
<span class='brown'>end</span></code></pre>
  <p class="gherkin-2">
    <span class='yellow'>Given</span> <strong>I am logged in</strong>
  </p>
  <pre class="ruby-2"><code>Given <span class='blue'>/^I (?:am logged in|log in)$/</span> <span class='brown'>do</span>
  kaikifs.backdoor_as kaikifs.username
<span class='brown'>end</span></code></pre>
  <p class="gherkin-3">
    <span class='yellow'>And</span> <strong>I am on the "Central Admin" tab</strong>
  </p>
  <pre class="ruby-3"><code>Given <span class='blue'>/^I am on the "([^"]*)" tab$/</span> <span class='brown'>do |tab|</span>
  kaikifs.switch_to.default_content
  kaikifs.find_element(<span class='blue'>:link_text</span>, tab).click
<span class='brown'>end</span></code></pre>
</div>

!SLIDE slide left x=7000 y=-1500

<h2><span class='cuke'>Feature</span></h2>

a grouping of tests that all exist in one feature file

"PCard Administration", "Vendor Maintenance"

!SLIDE slide left x=8000 y=-1500

<h2><span class='cuke'>Scenario</span></h2>

an example of expected behavior

acceptance criteria

"Canceling a new vendor should not blow up"

!SLIDE slide left x=4500 y=-800

<h2><span class='cuke'>Scenario Steps</span></h2>

Given - "setup" steps

When - actual user procedures

Then - expectations, assertions

!SLIDE slide left x=5500 y=-800

<h2><span class='cuke'>Given</span></h2>

Setup any context that is not really central or unique to the scenario.

In KaikiFS, "Given I am logged in" and "Given I am up top" are typical.

!SLIDE slide left x=6500 y=-800

<h2><span class='cuke'>When</span></h2>

Step-by-step procedure. In KaikiFS, there can be more than a dozen "When" steps.

!SLIDE left hidden x=6500 y=1060 z=1697 rotate-x=-135 scale=0.5

## examples of <span class='cuke'>When</span> steps

!SLIDE hidden x=6500 y=982 z=1904 rotate-x=-127.5 scale=0.5

#### When I open my Action List

!SLIDE hidden x=6500 y=896 z=2078 rotate-x=-120 scale=0.5

#### When I open a doc search

!SLIDE hidden x=6500 y=803 z=2217 rotate-x=-112.5 scale=0.5

#### When I click the "Vendor" portal link

!SLIDE hidden x=6500 y=705 z=2318 rotate-x=-105 scale=0.5

##### When I click the "Receiving" portal link under "Transactions"

<p style="margin: 0.3em auto; text-align: center;"><img src="receiving_links.png" style="width:480px;" /></p>

!SLIDE hidden x=6500 y=603 z=2379 rotate-x=-97.5 scale=0.5

##### When I click "disapprove" with reason "Don't leave a document hanging"

<p style="margin: 0.3em auto; text-align: center;"><img src="receiving_links.png" style="width:480px;" /></p>

!SLIDE hidden x=6500 y=500 z=2400 rotate-x=-90 scale=0.5

#### When I start a lookup for "Building"

!SLIDE hidden x=6500 y=397 z=2379 rotate-x=-82.5 scale=0.5

When I return the first result

When I return the first one

When I open the first one

!SLIDE left hidden x=6500 y=295 z=2318 rotate-x=-75 scale=0.5

<strong>When I set the </strong>"Vendor Name"<strong> to </strong>"Micron"

<strong>When I set the </strong>"Requestor Email"<strong> to </strong>"kfsi-5460@arizona.edu"<strong> if blank</strong>

<strong>When I set the </strong>"Description"<strong> to something like </strong>"testing KFSI-1021"

!SLIDE slide left x=7500 y=-800

<h2><span class='cuke'>Then</span></h2>

Verification steps. Typically limited to 3 verifications per scenario.

!SLIDE left hidden x=7500 y=1060 z=1697 rotate-x=-135 scale=0.5

## examples of <span class='cuke'>Then</span> steps

!SLIDE hidden x=7500 y=982 z=1904 rotate-x=-127.5 scale=0.5

#### Then I should see "Document was successfully submitted."

!SLIDE hidden x=7500 y=896 z=2078 rotate-x=-120 scale=0.5

#### Then I should see my Action List

!SLIDE hidden x=7500 y=803 z=2217 rotate-x=-112.5 scale=0.5

#### Then I should see "AdHoc Requests have been sent."

!SLIDE hidden x=7500 y=705 z=2318 rotate-x=-105 scale=0.5

#### Then I should see "Actions Taken" in the route log

!SLIDE hidden x=7500 y=603 z=2379 rotate-x=-97.5 scale=0.5

#### Then I shouldn't get an HTTP Status 500

!SLIDE slide left x=8500 y=-800

<h2><span class="cuke">Cucumber</span> can test...</h2>

* command line apps
* web applications
* developer tools / libraries

!SLIDE x=2700 y=800 scale=3

## What is <span style="font-family: arial;">Selenium</span>?

<img src="selenium.png" />

!SLIDE slide x=4000 y=800

## <span style="font-family: arial;">Selenium</span>

* is a _suite of tools_ for automating a browser
* can automate many browsers
* can be driven from many programming languages

!SLIDE x=5000 y=800

I thought Selenium was that cool browser plugin?

<span class="giant">NO</span><span class="giant sup">\*</span>

<span class="small">\* actually, yes</span>

!SLIDE left x=6000 y=800

Selenium _IDE_ is a neat, bare bones, record/playback Firefox plugin.

Selenium _WebDriver_ is the crazy powerful, awesome fun browser automation tool.

!SLIDE screen x=7000 y=800

### search google for kuali days

<pre><code>sam@mint6510:~$ <strong class="teal">irb -r selenium-webdriver</strong>
>> <span id="sgkd-1"><strong>driver = Selenium::WebDriver.for :firefox</strong>
=> #&lt;Selenium::WebDriver::Driver:0xad1c23c39ffdb20 browser=:firefox&gt;
>> </span><span id="sgkd-2"><strong>driver.navigate.to <span class="green">"http://www.google.com"</span></strong>
=> ""
>> </span><span id="sgkd-3"><strong>driver.find_element(:css, <span class="green">"#gbqfq"</span>)</strong>
=> #&lt;Selenium::WebDriver::Element:0x565d748bdaeb54c8...&gt;
>> </span><span id="sgkd-4"><strong>driver.find_element(:css, ).send_keys(<span class="green">"kuali days 2012"</span>)</strong>
=> ""
>> </span><span id="sgkd-5"><strong>driver.find_element(:css, <span class="green">"#gbqfq"</span>).click</strong>
=> "ok"
>> </span><span id="sgkd-6"><strong>driver.find_element(:xpath, <span class="green">"//ol[@id='rso']/li//a"</span>).click</strong>
=> "ok"
>> </span><span id="sgkd-7"><strong>driver.quit</strong></span>
</code></pre>

!SLIDE left x=8000 y=800

Honestly, Selenium has a pretty cool API, buuut...

!SLIDE x=4500 y=1500

## Capybara's is better

&lt;capybara logo not found&gt;

!SLIDE x=5500 y=1500

## Capybara...

> "helps you test web applications by simulating how a real user would interact with your app. It is agnostic about the driver running your tests..."

!SLIDE screen x=6500 y=1500

### search google for kuali days

<pre><code>sam@mint6510:~$ <strong class="teal">irb -r capybara -r capybara/dsl</strong>
>> <span id="sgkd-c1"><strong>include Capybara::DSL</strong>
=> Object
>> <strong>Capybara.run_server = false; Capybara.current_driver = :selenium</strong>
=> :selenium
>> </span><span id="sgkd-c2"><strong>visit <span class="green">"http://www.google.com/"</span></strong>
=> ""
>> </span><span id="sgkd-c3"><strong>fill_in(<span class="green">"gbqfq"</span>, :with => <span class="green">"kuali days 2012"</span>)</strong>
=> ""
>> </span><span id="sgkd-c4"><strong>click_button(<span class="green">"gbqfb"</span>)</strong>
=> "ok"
>> </span><span id="sgkd-c5"><strong>find(:xpath, <span class="green">"//ol[@id='rso']/li//a"</span>).click</strong>
=> "ok"
>> </span><span id="sgkd-c6"><strong>quit</strong></span>
</code></pre>

!SLIDE x=7500 y=1500

## Capybara::DSL

    fill_in('First Name', :with => 'John')
    check('A Checkbox')
    select('Option', :from => 'Select Box')
    
    page.has_selector?(:xpath, '//table/tr')
    page.has_content?('foo')
    page.should have_content('foo')
    find(:xpath, "//table/tr").click

!SLIDE x=3000 y=1500 scale=10

%% The End
%%%%%%%%%%%%%%%