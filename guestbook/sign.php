

<h2>Sign guestbook</h2>
<span style="color:white;"> <?php echo $msg; ?></span>

<form id="comment" method="post" action="index.php">
<div class="half"><label for="username">Name</label><br/><input type="text" name="username" role="username" placeholder="Name" value="<?php echo $_SESSION['name']; ?>" /></div>
<div class="half"><label for="website">Website (optional)</label><br/><input type="text" name="website" role="website" placeholder="http://" value="<?php echo $_SESSION['url']; ?>" /></div>
<div class="full"><label for="security"><?php echo $securityq; ?></label><br/><input type="text" name="security" role="security" placeholder="" /></div>
<div class="full"><label for="comment">Comment</label><br/>
<textarea rows="6" name="comment"><?php echo $_SESSION['comment']; ?></textarea></div>

<!-- spambot traps -->
<div style="display:none;">
<input type="text" name="name" />
<input type="text" name="url" />
</div>

<input type="submit" name="submit" value="Submit" />
</div>
