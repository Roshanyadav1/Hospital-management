# import logging

# logger = logging.getLogger(__name__)
# logger.setLevel(logging.INFO)
# handler = logging.FileHandler('./api.log')
# logger.addHandler(handler)
import logging
import sys

# Create logger
logger = logging.getLogger('my_logger')
logger.setLevel(logging.DEBUG)

# Create handlers and formatters
stdout_handler = logging.StreamHandler(sys.stdout)
stderr_handler = logging.StreamHandler(sys.stderr)
formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s')
stdout_handler.setFormatter(formatter)
stderr_handler.setFormatter(formatter)

# Add handlers to the logger
logger.addHandler(stdout_handler)
logger.addHandler(stderr_handler)

# Log some messages
logger.debug('Debug message')
logger.info('Info message')
logger.warning('Warning message')
logger.error('Error message')
logger.critical('Critical message')
