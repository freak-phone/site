      <div class="q">
        <div class="details">
          <p>
            <?php if (!empty($url)) { echo "<a href=\"". $url ."\">". $name ."</a>"; } else { echo $name; } ?> &#8258;
            <?php echo date_format($date, "F d, Y"); ?></p>
        </div>
        <p class="msg"><?php echo $comment; ?></p>
      </div>

<?php if (!empty($reply)) { ?>
            <div class="a">
        <img src="/graphics/pixel/395.gif" alt="" class="repi">
        <b> admin replied...</b>
        <p class="msg"><?php echo $reply; ?></p>
      </div>
<?php } ?>


